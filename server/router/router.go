package router

import (
	"github.com/Stephenkikuvi/blog/controller"
	"github.com/gofiber/fiber/v2"
)

//read blog=>get{id}

func SetUpRoutes(app *fiber.App) {

	app.Get("/", controller.Bloglist)
	app.Get("/:id", controller.BlogDetail)
	app.Post("/", controller.BlogCreate)
	app.Put("/:id", controller.BlogUpdate)
	app.Delete("/:id", controller.BlogDelete)

}
