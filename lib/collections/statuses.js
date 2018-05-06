
Statuses = new Mongo.Collection('statuses');

Meteor.methods({
  insertStatus: function({ statusMessage }) {

    let status = {
      statusMessage,
      userId: Meteor.userId()
    }

    status._id = Statuses.insert(comment);

    return status._id;
  }
});
