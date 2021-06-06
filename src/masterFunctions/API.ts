/* backend connection's functions */

import axios from 'axios';
import type { SearchTags } from '../types'
import appConfig from './configs/config'

class API {
    async getSpells(object: SearchTags) {
        const { name, level, type, range } = object
        const ulrQuery = `${appConfig.backendUrl}/spells?${!!name ? `name=${name}` : ''}${!!level ? `level=${level}` : ''}${!!type ? `type=${type}` : ''}${!!range ? `range=${range}` : ''}`
        console.log(`requisitando de: ${ulrQuery}`)
    
        const response = await axios({
            method: 'get',
            url: ulrQuery
        })
        
        return response.data
    }

    async getMonsters(object: SearchTags) {
        const { name, challengeRating, type } = object
        const ulrQuery = `${appConfig.backendUrl}/spells?${!!name ? `name=${name}` : ''}${!!challengeRating ? `challengeRating=${challengeRating}` : ''}${!!type ? `type=${type}` : ''}`

        const response = await axios({
            method: 'get',
            url: ulrQuery
        })

        return response.data
    }

    async getItems(object: SearchTags) {
        const { name, rarity, type } = object
        const ulrQuery = `${appConfig.backendUrl}/spells?${!!name ? `name=${name}` : ''}${!!rarity ? `rarity=${rarity}` : ''}${!!type ? `type=${type}` : ''}`

        const response = await axios({
            method: 'get',
            url: ulrQuery
        })

        return response.data
    }
}

export default new API;