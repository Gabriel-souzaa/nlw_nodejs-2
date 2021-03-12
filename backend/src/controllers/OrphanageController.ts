import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

class OrphanageController {
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const orphanageRepository = getRepository(Orphanage);

        //Identificar que é um array "Express.Multer.File[]"
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {
                path: image.filename
            }
        })

        const orphanage = orphanageRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })

        await orphanageRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
    async index(request: Request, response: Response) {
        const orphanageRepository = getRepository(Orphanage);
        
        const orphanages = await orphanageRepository.find();

        return response.status(200).json(orphanages);
    }
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const orphanageRepository = getRepository(Orphanage);
        
        const orphanage = await orphanageRepository.findOneOrFail(id);

        return response.status(200).json(orphanage);
    }
}

export default OrphanageController;