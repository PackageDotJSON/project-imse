const DATABASE_QUERIES = {
    CREATE_DATABASE_SHOP:  `CREATE DATABASE IF NOT EXISTS SHOP`,
    CREATE_TABLE_CUSTOMER: `CREATE TABLE IF NOT EXISTS SHOP.CUSTOMER(CUSTOMER_ID INT NOT NULL AUTO_INCREMENT 
                            PRIMARY KEY, CUSTOMER_NAME VARCHAR(50), CUSTOMER_EMAIL VARCHAR(50), CUSTOMER_CITY VARCHAR(50), CUSTOMER_ADDRESS VARCHAR(100), CUSTOMER_PHONE_NO VARCHAR(20), CUSTOMER_PASSWORD VARCHAR(50), 
                            REGISTRAION_TIME DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    CREATE_TABLE_SELLER:   `CREATE TABLE IF NOT EXISTS SHOP.SELLER(SELLER_ID INT NOT NULL AUTO_INCREMENT 
                            PRIMARY KEY, SELLER_NAME VARCHAR(50), SELLER_EMAIL VARCHAR(50), SELLER_CITY VARCHAR(50), SELLER_ADDRESS VARCHAR(100), SELLER_PHONE_NO VARCHAR(20), SELLER_PASSWORD VARCHAR(50), 
                            REGISTRAION_TIME DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    CREATE_TABLE_PRODUCT:  `CREATE TABLE IF NOT EXISTS SHOP.PRODUCT(PRODUCT_ID INT NOT NULL AUTO_INCREMENT 
                            PRIMARY KEY, PRODUCT_NAME VARCHAR(50), PRODUCT_PRICE INT, PRODUCT_COLOR VARCHAR(50), PRODUCT_SELLER_ID INT, FOREIGN KEY(PRODUCT_SELLER_ID) REFERENCES 
                            SELLER(SELLER_ID), REGISTRATION_TIME DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`,
    CREATE_TABLE_ORDER:    `CREATE TABLE IF NOT EXISTS SHOP.ORDER(ORDER_ID INT NOT NULL AUTO_INCREMENT 
                            PRIMARY KEY, CHECKOUT_TIME DATETIME NOT NULL DEFAULT 
                            CURRENT_TIMESTAMP, ORDER_CUSTOMER_ID INT, ORDER_ADDRESS VARCHAR(50), ORDER_PMETHOD VARCHAR(50),
                            ORDER_PRODUCT_ID INT, FOREIGN KEY(ORDER_CUSTOMER_ID) REFERENCES 
                            CUSTOMER(CUSTOMER_ID), FOREIGN KEY(ORDER_PRODUCT_ID) REFERENCES PRODUCT(PRODUCT_ID))`,
    CREATE_TABLE_INVOICE:  `CREATE TABLE IF NOT EXISTS SHOP.INVOICE(INVOICE_ID INT NOT NULL AUTO_INCREMENT 
                            PRIMARY KEY, CHECKOUT_TIME DATETIME NOT NULL DEFAULT 
                            CURRENT_TIMESTAMP, INVOICE_PRICE INT, INVOICE_TITLE VARCHAR(50), INVOICE_ORDER_ID INT,
                            FOREIGN KEY(INVOICE_ORDER_ID) REFERENCES SHOP.ORDER(ORDER_ID))`,
    AUTHENTICATE_CUSTOMER: `SELECT CUSTOMER_ID, CUSTOMER_NAME FROM SHOP.CUSTOMER WHERE 
                            CUSTOMER_EMAIL = ? AND CUSTOMER_PASSWORD = ?`,
    AUTHENTICATE_SELLER:   `SELECT SELLER_ID, SELLER_NAME FROM SHOP.SELLER WHERE 
                            SELLER_EMAIL = ? AND SELLER_PASSWORD = ?`,
    ADD_CUSTOMER:          `INSERT INTO SHOP.CUSTOMER(CUSTOMER_NAME, CUSTOMER_EMAIL, CUSTOMER_CITY, CUSTOMER_ADDRESS, CUSTOMER_PHONE_NO, CUSTOMER_PASSWORD) VALUES (?, ?, ?, ?, ?, ?)`,
    ADD_SELLER:            `INSERT INTO SHOP.SELLER(SELLER_NAME, SELLER_EMAIL, SELLER_CITY, SELLER_ADDRESS, SELLER_PHONE_NO, SELLER_PASSWORD) VALUES (?, ?, ?, ?, ?, ?)`,
    SEARCH_CUSTOMER:       `SELECT * FROM SHOP.CUSTOMER WHERE CUSTOMER_EMAIL = ? AND CUSTOMER_PASSWORD = ?`,
    SEARCH_SELLER:         `SELECT * FROM SHOP.CUSTOMER WHERE SELLER_EMAIL = ?`,
    ADD_PRODUCT:           `INSERT INTO SHOP.PRODUCT(PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_COLOR, PRODUCT_SELLER_ID) VALUES (?, ?, ?, ?)`,
    UPDATE_CUSTOMER:       `UPDATE SHOP.CUSTOMER SET CUSTOMER_NAME = ?, CUSTOMER_EMAIL = ?, CUSTOMER_CITY = ?, CUSTOMER_ADDRESS = ?, CUSTOMER_PHONE_NO = ?, CUSTOMER_PASSWORD = ?
                            WHERE CUSTOMER_ID = ?`,
    UPDATE_SELLER:         `UPDATE SHOP.SELLER SET SELLER_NAME = ?, SELLER_EMAIL = ?, SELLER_CITY = ?, SELLER_ADDRESS = ?, SELLER_PHONE_NO = ?, SELLER_PASSWORD = ?
                            WHERE SELLER_ID = ?`,
    PRODUCTS:              `SELECT * FROM SHOP.PRODUCT`,    
    ADD_ORDER:             `INSERT INTO SHOP.ORDER(ORDER_CUSTOMER_ID, ORDER_ADDRESS, ORDER_PMETHOD, ORDER_PRODUCT_ID) VALUES (?, ?, ?, ?);  SELECT LAST_INSERT_ID() AS ORDER_ID;`,
    ADD_INVOICE:           `INSERT INTO SHOP.INVOICE(INVOICE_PRICE, INVOICE_TITLE, INVOICE_ORDER_ID) VALUES (?, ?, ?)`,
    LIST_INVOICE:          `SELECT * FROM SHOP.INVOICE INNER JOIN SHOP.ORDER ON SHOP.INVOICE.INVOICE_ORDER_ID = SHOP.ORDER.ORDER_ID WHERE ORDER.ORDER_CUSTOMER_ID =  ? `,
    LIST_PRODUCT:          `SELECT * FROM SHOP.PRODUCT WHERE PRODUCT_SELLER_ID = ? `,
    SOLD_PRODUCT:          `SELECT
                            P.PRODUCT_ID,
                            P.PRODUCT_NAME,
                            MAX(S.SELLER_ID) AS SELLER_ID,
                            MAX(S.SELLER_NAME) AS SELLER_NAME,
                            COUNT(P.PRODUCT_NAME) AS frequency
                            FROM
                            SHOP.ORDER O
                            INNER JOIN SHOP.PRODUCT P ON O.ORDER_PRODUCT_ID = P.PRODUCT_ID
                            INNER JOIN SHOP.SELLER S ON P.PRODUCT_SELLER_ID = S.SELLER_ID
                            GROUP BY
                            P.PRODUCT_ID,
                            P.PRODUCT_NAME
                            ORDER BY
                            frequency;`,
    LOYAL_CUSTOMER:         `SELECT
	                        C.CUSTOMER_ID,C.CUSTOMER_NAME,C.CUSTOMER_EMAIL,
                            COUNT(O.ORDER_ID) AS total_orders
                            FROM SHOP.CUSTOMER C
                            INNER JOIN SHOP.ORDER O ON C.CUSTOMER_ID = O.ORDER_CUSTOMER_ID
                            GROUP BY C.CUSTOMER_ID, C.CUSTOMER_NAME, C.CUSTOMER_EMAIL ORDER BY total_orders DESC
                            LIMIT 1;`,
    FLUSH_DATA:             `SET FOREIGN_KEY_CHECKS = 0; TRUNCATE TABLE SHOP.CUSTOMER; TRUNCATE TABLE SHOP.SELLER; TRUNCATE TABLE SHOP.PRODUCT;
                             TRUNCATE TABLE SHOP.ORDER; TRUNCATE TABLE SHOP.INVOICE; SET FOREIGN_KEY_CHECKS = 1;`,                       

};

module.exports = DATABASE_QUERIES;