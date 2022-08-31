const router = require('express').Router();
const authToken = require('../utils/authToken');
const { CompanyCreateSchema } = require( "../schemas/companySchema" );
const User = require('../module/User');
const Company = require('../module/Company');
const { v4: uuid } = require('uuid');
//
// ONE COMPANY REQUESTS
//
// [GET] GET COMPANY BY ID
router.get('/id/:id', authToken, async (req, res) => {
  console.log('test get company by id');
});
// [POST] CREATE COMPANY
router.post('/create', authToken, async (req, res) => {

  //Validate Schema
  const { error } = CompanyCreateSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  //Check User exists
  const user = await User.findOne({ uuid: req.body.id });
  if (!user) return res.status(400).send('User does not exist');

  console.log('test company');
  const company = new Company({
    uuid: uuid(),
    name: req.body.data.name,
    company_owner: req.body.data.company_owner,
    company_creator: req.body.data.company_creator,
  });
  try {
    const saveCompany = await company.save();
    res.send({company: company});
  } catch (error) {
    res.status(400).send(error)
  }
});
// [PATCH] UPDATE COMPANY
router.patch('/update', authToken, async (req, res) => {
  console.log('test update');
});
// [PATCH] SOFT-DELETE COMPANY
router.patch('/soft-delete', authToken, async (req, res) => {
  console.log('test soft delete');
});
// [PATCH] DELETE COMPANY
router.patch('/delete', authToken, async (req, res) => {
  console.log('test delete');
});

// ALL COMPANY REQUESTS
router.get('/list-all', authToken, async (req, res) => {
  // //Validate Schema
  // const { error } = SignInSchema(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  // //Check User is valid
  // const user = await User.findOne({username: req.body.user});
  // if (!user) return res.status(400).send('User is invalid');
  // //Check Password is valid
  // const validPassword = await bcrypt.compare(req.body.password, user.password )
  // if (!validPassword) return res.status(400).send('Password is invalid');

  //Check User is valid
  // const tokenDecoded = jwt.decode(req.body.token);
  // const user = await User.findOne({_id: tokenDecoded.user });
  console.log('test list all companies');
  // res.send({user: 'test company'});
});

// [GET] GET COMPANY ADMIN LIST
router.get('/admin/list', authToken, async (req, res) => {
  try {
    const companyList = await Company.find();
    res.send({companies: companyList});
  } catch (error) {
    res.status(400).send(error)
  }
});
// [GET] GET COMPANY ADMIN CREATE
router.post('/admin/create', authToken, async (req, res) => {
  const company = new Company({
    uuid: uuid(),
    name: req.body.name,
    owner: req.user.user,
    createdBy: req.user.user,
    createdDate: new Date(),
  });
  try {
    console.log(company)
    const companySaved = await company.save();
    res.send({company: companySaved});
  } catch (error) {
    res.status(400).send(error)
  }
});
module.exports = router;
