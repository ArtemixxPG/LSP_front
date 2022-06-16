
export function createMapObj(data){
    let objects = []

    for (let i = 0; i < data.length;i++){
        objects.push({
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Circle',
                coordinates: [55.755381, 37.619044],
                radius: 300
            }
        });
    }
    return objects;
}