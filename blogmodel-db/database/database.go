package database

import (
	"log"

	model "github.com/Stephenkikuvi/blog/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {

	dsn := "root:10234710Sk@tcp(127.0.0.1:3306)/blog?charset=utf8mb4&parseTime=True&loc=Local"

	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to the database:", err)
	}

	log.Println("Connected to MariaDB using GORM!")

	DB.AutoMigrate(new(model.Blog))
}

// Create a new database
// _, err = db.Exec("CREATE DATABASE IF NOT EXISTS blogdb")
// if err != nil {
//   log.Fatal("Error creating database:", err)
//}
///log.Println("Database 'blogdb' created successfully.")

// Switch to the new database
//db.Exec("USE blogdb")

// Create a new table
//tableQuery := `
//  CREATE TABLE IF NOT EXISTS posts (
//    id INT AUTO_INCREMENT PRIMARY KEY,
//  title VARCHAR(255) NOT NULL,
//content TEXT NOT NULL,
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//) ENGINE=InnoDB;`
// _, err = db.Exec(tableQuery)
// if err != nil {
//    log.Fatal("Error creating table:", err)
// }
// log.Println("Table 'posts' created successfully.")
//}
