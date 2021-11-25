const path         = require('path');
const HOMEDIR      = path.join(__dirname,'..');
const Contacts     = require(path.join(HOMEDIR,'models','contacts'));


// ******
// CONTACTS SERVICES
// ******



const exposeServices={
    // TODO: filter & embed
    findAllContacts:async function(query){
        try {
            const   allC = await Contacts.find().exec();
            return  allCa;
        } catch (err) {
            return err;
        }

    },
    // TODO: filter & embed
    findOneContact:async function(query){
      let {id} = query;
      try {
        let    auth = await Contacts.findOne({_id:id}).exec();
        return auth;
      } catch (err) {
          return err;
      }

    },
    saveOne:async function(data){
      let oneC= new Contacts(data);
      try {
          let newC = await oneC.save();
          return newC;
        } catch (err) {
          return err;
        }
    }
}

module.exports = exposeServices;
