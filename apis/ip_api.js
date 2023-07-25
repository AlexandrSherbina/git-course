const URL_IP_INFO ="https://ipinfo.io/json?token=13efd2146c2a0f";

export default   async function getMyselfIp ()  {
    try {
        const request = await fetch(URL_IP_INFO);
        const jsonResponse = await request.json();
    return jsonResponse;
    } catch (error) {
        console.error(error);
    }
}

