import { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

// * READ 전체 데이터 조회
export const readAllCat = (req: Request, res: Response) => {
    try{
        const cats = Cat;
        res.status(200).send({
            success: true,
            data:{
                cats,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};
// * READ 특정 데이터 조회
export const readCat = (req: Request, res: Response) => {
    try{
        const cat = Cat.find((cat) => {
            return cat.id === req.params.id
            });
        res.status(200).send({
            success: true,
            data:{
                cat,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

// * CREATE 새로운 데이터 추가
export const createCat = (req: Request, res: Response) => {
    try{
        const data = req.body;
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data:{ data },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
    
};

// * PUT 기존 데이터 수정
export const updateCat = (req: Request, res: Response) => {
    try{
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if(cat.id === params.id){
                cat = body;
                result = cat;
            }
        })
        res.status(200).send({
            success: true,
            data:{
                cat: result,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

// * PATCH 기존 데이터 일부 수정
export const updatePartialCat = (req: Request, res: Response) => {
    try{
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if(cat.id === params.id){
                cat = {...cat, ...body};
                result = cat;
            }
        })
        res.status(200).send({
            success: true,
            data:{
                cat: result,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

// * DELETE 기존 데이터 삭제
export const deleteCat = (req: Request, res: Response) => {
    try{
        const params = req.params;
        const cat = Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data:{
                cat: cat,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};