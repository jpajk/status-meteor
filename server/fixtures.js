
import faker from 'faker'

if (Statuses.find().count() === 0) {
  for (let i =0; i<=100; i++) {
    Statuses.insert({
      message: faker.name.findName(),
      userId: 'grpMnw6grnCxyywn3',
      created: (new Date()).getTime()
    });
  }
}