const axios = require('axios');

exports.getImages = async(id) => {
    try {
        return await axios.get(
            'https://api.thedogapi.com/v1/images/search', {
                headers: {
                    'x-api-key': "26b41856-8ad0-4274-8089-bfc136b06fb", // TODO : MUST HIDE api-key
                    'Content-Type': 'application/json'
                },
                params: {
                    order: 'RANDOM',
                    has_breeds: true,
                    size: 'med',
                    mime_types: 'jpg',
                    format: 'json',
                    page: 1,
                    limit: 5,
                    breed_id: id
                }
            });
    } catch (error) {
        console.error(error)
    }
};