import Adver from '../models/product.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'

const create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: "Image could not be uploaded"
            })
        }
        let adver = new Adver(fields)
        if(files.image){
            adver.image.data = fs.readFileSync(files.image.path)
            adver.image.contentType = files.image.type
        }
        if(files.childImages){
            files.childImages.forEach(( child, childNum) => {
                var img = {};
                img.data = fs.readFileSync(files.childImages[childNum].path)
                img.contentType = files.childImages[childNum].type
                adver.childImages.push(img);
            });
        }
        try {
            let result = await adver.save()
            res.json(result)
        } catch (err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

const adverByID = async (req, res, next, id) => {
    try {
        let product = await Adver.findById(id).populate('shop', '_id name').exec()
        if (!product)
            return res.status('400').json({
                error: "Adver not found"
            })
        req.product = product
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve product"
        })
    }
}

const photo = (req, res, next) => {
    if(req.product.image.data){
        res.set("Content-Type", req.product.image.contentType)
        return res.send(req.product.image.data)
    }
    next()
}

const childPhoto = (req, res, next) => {
    const childNum = req.params.childNum;
    if(req.product.image.data){
        res.set("Content-Type", req.product.image.contentType)
        return res.send(req.product.childImages[childNum].data)
    }
    next()
}

const defaultPhoto = (req, res) => {
    return res.sendFile(process.cwd()+defaultImage)
}

const defaultChildPhoto = (req, res) => {
    return res.sendFile(process.cwd()+defaultImage)
}

const read = (req, res) => {
    req.product.image = undefined
    return res.json(req.product)
}

const update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: "Photo could not be uploaded"
            })
        }
        let product = req.product
        product = extend(product, fields)
        product.updated = Date.now()
        if(files.image){
            product.image.data = fs.readFileSync(files.image.path)
            product.image.contentType = files.image.type
        }
        try {
            let result = await product.save()
            res.json(result)
        }catch (err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

const remove = async (req, res) => {
    try{
        let product = req.product
        let deletedProduct = await product.remove()
        res.json(deletedProduct)

    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    const query = {}
    if(req.query.search)
        query.name = {'$regex': req.query.search, '$options': "i"}
    if(req.query.category && req.query.category !== 'All')
        query.category =  req.query.category
    try {
        let products = await Adver.find(query).populate('shop', '_id name').select('-image').exec()
        res.json(products)
    } catch (err){
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    create,
    adverByID,
    photo,
    defaultPhoto,
    childPhoto,
    defaultChildPhoto,
    read,
    update,
    remove,
    list
}
