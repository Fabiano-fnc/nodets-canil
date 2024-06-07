import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    console.log('Query', query);

    if(!query){
        res.redirect('/');
    return
    }

    let list = Pet.getFromName(query);
    console.log('resultado de busca', list);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query,
    });
}