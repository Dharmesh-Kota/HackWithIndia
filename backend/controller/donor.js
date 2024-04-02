import User from "../models/user.js";

export const nearby_agency = async (req, res) => {
    try {
        let users = await User.find({ role: "compostAgency" });
        let nearbyAgency = [];
    
        if (Object.keys(req.query).length > 0) {
            const lat = req.query.lat;
            const lng = req.query.lng;
    
            // find the nearby hospitals
            for (const user of users) {
                const apiKey = process.env.apiKey;
    
                const startCoordinates = lat + ',' + lng;
                const traffic = true;
    
                const tomtomApiEndpoint = 'https://api.tomtom.com/routing/1/calculateRoute/';
                const url = `${tomtomApiEndpoint}${startCoordinates}:${endCoordinates}/json?key=${apiKey}&traffic=${traffic}`;
    
                const response = await axios.get(url);
                const data = response.data;
                const route = data.routes && data.routes[0];
    
                if (route) {
                    const distance = route.summary.lengthInMeters / 1000; // in km
                    const travelTime = route.summary.travelTimeInSeconds / 3600; // in hrs
    
                    if (distance < 10) {
                        await nearbyAgency.push(user);
                    }
                } else {
                    console.log('No route found.');
                }
            } 
        } else {

            let location = await User.findById(req.user.id);
            location = location.location;


            // find the nearby hospitals
            for (const user of users) {
                const apiKey = process.env.apiKey;
    
                const startCoordinates = location;
                const traffic = true;
    
                const tomtomApiEndpoint = 'https://api.tomtom.com/routing/1/calculateRoute/';
                const url = `${tomtomApiEndpoint}${startCoordinates}:${endCoordinates}/json?key=${apiKey}&traffic=${traffic}`;
    
                const response = await axios.get(url);
                const data = response.data;
                const route = data.routes && data.routes[0];
    
                if (route) {
                    const distance = route.summary.lengthInMeters / 1000; // in km
                    const travelTime = route.summary.travelTimeInSeconds / 3600; // in hrs
    
                    if (distance < 10) {
                        await nearbyAgency.push(user);
                    }
                } else {
                    console.error('No route found.');
                }
            }
        }
    
        return res.status(201).json({ nearbyAgency: nearbyAgency });

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }

}
