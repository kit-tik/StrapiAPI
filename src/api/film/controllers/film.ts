/**
 * film controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::film.film');


// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::film.film', ({ strapi }) =>  ({
//     async findOne(ctx) {
//         // const sanitizedQueryParams = await this.sanitizeQuery(ctx);
//         const {slug} = ctx.params;
// console.log("slug", slug)
//         const entity = await strapi.db.query('api::film.film').findOne({where:{slug}});
//         const sanitizedResults = await this.sanitizeOutput(entity, ctx);
// console.log(sanitizedResults)    
//         return this.transformResponse(sanitizedResults);
//       }
// }));

