import express from 'express'
import adverCtrl from '../controllers/adver.controller'

const router = express.Router()

router.route('/api/advers')
    .get(adverCtrl.list)

router.route('/api/advers/:adverId')
    .get(adverCtrl.read)

router.route('/api/advers/image/:adverId')
    .get(adverCtrl.photo, adverCtrl.defaultPhoto)

router.route('/api/advers/childimage/:adverId/:childNum')
    .get(adverCtrl.childPhoto, adverCtrl.defaultChildPhoto)
router.route('/api/advers/defaultphoto')
    .get(adverCtrl.defaultChildPhoto)

router.param('adverId', adverCtrl.adverByID)

export default router
