import responses from '../responses';
import 'dotenv/config';

const Vehicles = {
    '/vehicles/create': {
        post: {
          tags: ['Vehicles'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'create new vehicle',
          parameters: [
            {
                in: 'formData',
                name: 'plateText',
                required: true,
            },
            {
              name: 'photo',
              in: 'formData',
              required: true,
              type: 'file',
            },
          ],
          consumes: ['application/json'],
          responses,
        },
      },
      '/vehicles': {
        get: {
          tags: ['Vehicles'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'retreive all vehicles',
          parameters: [],
          consumes: ['application/json'],
          responses,
        },
      },
}
export default Vehicles
