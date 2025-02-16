import { server } from "../src/server";
import request from "supertest";
import Prisma from "../src/db";

beforeAll(async () => {
  await Prisma.entry.deleteMany({});
  await server.ready(); 
});

afterAll(async () => {
  await Prisma.$disconnect();
  await server.close(); 
});

describe("Server API tests", () => {
  it("should create an entry", async () => {
    const response = await request(server.server).post("/create/").send({
      title: "Test Entry",
      description: "This is a test entry",
      created_at: new Date(),
      scheduled_date: new Date(),
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should retrieve all entries", async () => {
    const response = await request(server.server).get("/get/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should retrieve a single entry", async () => {
    const entry = await Prisma.entry.create({
      data: {
        title: "Single Entry Test",
        description: "For testing get by ID",
        created_at: new Date(),
        scheduled_date: new Date(),
      },
    });

    const response = await request(server.server).get(`/get/${entry.id}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(entry.id);
  });

  it("should delete an entry", async () => {
    const entry = await Prisma.entry.create({
      data: {
        title: "Delete Me",
        description: "Entry to be deleted",
        created_at: new Date(),
        scheduled_date: new Date(),
      },
    });

    const response = await request(server.server).delete(`/delete/${entry.id}`);
    expect(response.status).toBe(200);
  });
});
