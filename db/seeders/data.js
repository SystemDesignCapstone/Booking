// const faker = require('faker');
// const moment = require('moment');

// module.exports.generate = {
//   numberGenerator: (min, max) => Math.floor(Math.random() * (max - min + min)) + min,
//   users: (users) => {
//     for (let i = 1; i <= users; i += 1) {
//       const user = {};
//       user.id = i;
//       user.name = faker.name.findName();
//       module.exports.users.push(user);
//     }
//   },
//   customers: (customers) => {
//     for (let i = 1; i <= customers; i += 1) {
//       const customer = {};
//       customer.id = i;
//       customer.name = faker.name.findName();
//       module.exports.customers.push(customer);
//     }
//   },
//   listings: (listings, users) => {
//     for (let i = 1; i <= listings; i += 1) {
//       const listing = {};
//       listing.id = i;
//       listing.owner_id = module.exports.generate.numberGenerator(1, users);
//       listing.review_count = module.exports.generate.numberGenerator(40, 500);
//       listing.day_rate = module.exports.generate.numberGenerator(40, 200);
//       listing.cleaning_fee = module.exports.generate.numberGenerator(50, 100);
//       listing.service_fee = module.exports.generate.numberGenerator(25, 100);
//       listing.max_guests = module.exports.generate.numberGenerator(1, 15);
//       listing.avg_weekly_views = module.exports.generate.numberGenerator(45, 500);
//       listing.avg_monthly_views = module.exports.generate.numberGenerator(200, 1200);
//       listing.total_views = module.exports.generate.numberGenerator(600, 7800);
//       listing.stars = module.exports.generate.numberGenerator(1, 5);
//       module.exports.listings.push(listing);
//     }
//   },
//   bookings: (bookings, listings, customers) => {
//     for (let i = 1; i <= bookings; i += 1) {
//       const booking = {};
//       const today = moment();
//       const start = faker.date.between(today, today.add(module.exports.generate.numberGenerator(1, 90), 'days'));
//       const end = moment(start).add(module.exports.generate.numberGenerator(1, 15), 'days');
//       booking.listing_id = module.exports.generate.numberGenerator(1, listings);
//       booking.customer_id = module.exports.generate.numberGenerator(1, customers);
//       booking.start_date = start;
//       booking.end_date = end;
//       booking.total_cost = module.exports.generate.numberGenerator(150, 1800);
//       booking.host_booking = false;
//       module.exports.bookings.push(booking);
//     }
//   },
// };

// module.exports.users = [];
// module.exports.customers = [];
// module.exports.listings = [];
// module.exports.bookings = [];
