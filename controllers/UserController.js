const dummyData = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'kiwi' },
];

const getUser = (req, res) => {
    const { name } = req.query;
    const user = dummyData.find(el => el.name === name);

    res.json(user);
};

module.exports = {
    getUser,
};
