
Statuses = new Mongo.Collection('statuses');

Meteor.methods({
  insertStatus: function({ message }) {

    let status = {
      message,
      userId: Meteor.userId()
    }

    status._id = Statuses.insert(status)
    console.log(status)
    return status._id;
  }
});
