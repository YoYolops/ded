/* backend connection's functions */

import axios from 'axios';
import type { SearchTags, Character, Login } from '../types'
import appConfig from './configs/config'

class API {
    async registerCharacter(object: Character) {
        try {
            const response = await axios({
                method: 'post',
                url: appConfig.backendUrl + '/register',
                data: object
            })
            return response

        } catch(err) {
            if(err.response) {
                alert('O servidor não está respondendo')
                console.log(err)
            } else if(err.request) {
                alert('O servidor respondeu sem dados')
                console.log(err)
            } else {
                alert('Deu pau geral')
                console.log(err)
            }
        }
    }

    async login(object: Login) {
        try {
            const response = await axios({
                method: 'post',
                url: appConfig.backendUrl + '/login',
                data: object
            })
            return response.data

        } catch(err) {
            if(err.response) {
                alert('O servidor não está respondendo')
                console.log(err)
            } else if(err.request) {
                alert('O servidor respondeu sem dados')
                console.log(err)
            } else {
                alert('Deu pau geral')
                console.log(err)
            }
        }
    }

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

    async getRaces(object: SearchTags) {
        const { name } = object
        const ulrQuery = `${appConfig.backendUrl}/races?${!!name ? `name=${name}` : ''}`

        const response = await axios({
            method: 'get',
            url: ulrQuery
        })

        return response.data
    }
}

export default new API;