import supertest from "supertest";
import app from "../index";

const req = supertest(app);

describe('test basic endpoint server', () => {
    it('Get the /api/v1/myroute endpoint', async () => {
        const res = await req.get('/api/v1/myroute')
        expect(res.status).toBe(200);
    })
})
