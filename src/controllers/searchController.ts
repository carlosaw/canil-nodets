import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;// Pega o que foi digitado

  if(!query) {// Se busca vazio retorna para home
    res.redirect('/');
    return;
  }

  let list = Pet.getFromName(query);// Preenche a lista

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query// Pega a lista da busca
  });
}