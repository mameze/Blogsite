package main

import (
	"github.com/Stephenkikuvi/blog/database"
	"github.com/gofiber/fiber/v2"
)

func init() {
	database.ConnectDB()

}

func main() {

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {

		return c.JSON(fiber.Map{"message": "Welcometo my first blog Application"})

		//return c.SendString("Hello World.")
	})

	app.Listen(":8080")
}
