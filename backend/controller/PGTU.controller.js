const db = require('../db')
class PGTUController {
    async getAllCourses(req, res) {
        const courses = await db.query('SELECT DISTINCT(year) FROM course')
        res.json(courses.rows)
    }

    async outputPhotoListGraduates(req, res) {
        let json_graduates = {}
        let graduates_key = 'graduates'
        let images_key = 'images'
        json_graduates[graduates_key] = []
        json_graduates[images_key] = []
        //const {year} = req.body
        const year = 2000
        const list = await db.query('SELECT full_name,email FROM graduate WHERE year_of_graduation = $1', [year])
        json_graduates[graduates_key] = list.rows
        const list2 = await db.query('SELECT path FROM picture WHERE id_picture = (SELECT id_picture FROM course_picture WHERE id_course = (SELECT id_course FROM course WHERE year = $1))', [year])
        json_graduates[images_key] = list2.rows
        res.json(json_graduates)
    }

    async outputMainPage(req, res) {
        let json_mainPage = {}
        let mainPage_key = 'main page'
        json_mainPage[mainPage_key] = []
        const list = await db.query('SELECT * FROM site_hub')
        json_mainPage[mainPage_key]= list.rows
        res.json(json_mainPage)
    }
}

module.exports = new PGTUController()