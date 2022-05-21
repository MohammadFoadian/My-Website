import axios from 'axios'

// 1
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"

const getCoin = async () => {  // 2
    const response = await axios.get(BASE_URL) // 3
    return response.data // 4
}

export {getCoin}