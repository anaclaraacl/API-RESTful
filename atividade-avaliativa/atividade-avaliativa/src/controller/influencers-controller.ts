import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import MongoConnection from "../db/mongo-connection";
import Influencer from "../model/influencers";
import InfluencersService from "../service/influencers-service";
import { ObjectId } from "mongodb";

export default class InfluencersController {
    public static async getAllInfluencer(req: Request, res: Response, next: NextFunction) {
        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers_collection");
            res.status(200).json(await influencers.find().toArray());
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async createInfluencer(req: Request, res: Response, next: NextFunction) {
        const influencer: Influencer  = req.body;

        try {
            InfluencersService.validade(influencer);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }

        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers_collection");
            await influencers.insertOne(influencer);
            res.status(201).json(influencer);            
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async updateInfluencer(req: Request, res: Response, next: NextFunction) {
        const influencer: Influencer  = req.body;
        const {id} = req.params;
        let objectId: ObjectId;

        try {
            objectId = InfluencersService.validateId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }
        
        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers_collection");
            
            if (await influencers.countDocuments({_id: objectId}) === 0) {
                next(createError[404]("Não existe influencer com esse id"));
                return;
            }

            try {
                InfluencersService.validade(influencer);
            } catch (error) {
                next(createError[400]((error as Error).message));
                return;
            }
            await influencers.updateOne({_id: objectId}, {
                $set: influencer
            });

            res.status(200).json(await influencers.findOne({_id: objectId}));
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }

    public static async deleteInfluencer(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        let objectId: ObjectId;

        try {
            objectId = InfluencersService.validateId(id);
        } catch (error) {
            next(createError[400]((error as Error).message));
            return;
        }
        
        try {
            const conn = await MongoConnection.getInstance();
            const db = conn.db("devweb");
            const influencers = db.collection("influencers_collection");
            
            if (await influencers.countDocuments({_id: objectId}) === 0) {
                next(createError[404]("Não existe influencer com esse id"));
                return;
            }

            await influencers.deleteOne({_id: objectId});

            res.status(204).send("");
        } catch (error) {
            next(createError[500]((error as Error).message));
        }
    }    
}