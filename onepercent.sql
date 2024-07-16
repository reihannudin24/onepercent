CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    contact VARCHAR(15) NOT NULL UNIQUE,
    age INT,
    birthday DATE NOT NULL,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert dummy data
INSERT INTO users (username, firstname, lastname, email, password, contact, age, birthday, location) VALUES
('john_doe', 'John', 'Doe', 'john.doe@example.com', 'securepassword1', '1234567890', 30, '1994-07-16', 'New York');

CREATE TABLE schedules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200),
    category VARCHAR(100),
    reminder VARCHAR(100),
    start_time TIME,
    end_time TIME,
    dates DATE,
    type VARCHAR(100),
    status VARCHAR(100),
    user_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert a single row of data into the schedules table
INSERT INTO schedules (title, description, category, reminder, start_time, end_time, dates, type, status, user_id) VALUES
('Workout', 'deskripsi schedule', 'plan', 'whatsapp', '08:00:00', '08:00:00', '2024-07-17', 'none', 'reminder', 1);

CREATE TABLE finances (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    goals VARCHAR(100),
    budget DECIMAL(10, 2),
    month VARCHAR(100),
    year YEAR,
    user_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO finances (title, goals, budget, month, year, user_id) VALUES
('Budget pengeluaran perbukan July 2024', 'bayar hostingan', 40000000, 'July', 2024, 1);

CREATE TABLE budgets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    percent INT,
    budged_prediction DECIMAL(10, 2),
    finance_id BIGINT,
    user_id BIGINT
) ENGINE=InnoDB;

INSERT INTO budgets (title, percent, budged_prediction, finance_id, user_id) VALUES
('Kebutuhan seharian', 50, NULL, 1, 1),
('tabungan kuliah', 25, NULL, 1, 1),
('amal', 5, NULL, 1, 1),
('self reward', 10, NULL, 1, 1);

CREATE TABLE incomes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    total DECIMAL(10, 2),
    times DATETIME,
    finance_id BIGINT,
    budget_id BIGINT,
    user_id BIGINT
) ENGINE=InnoDB;

INSERT INTO incomes (title, total, times, finance_id, budget_id, user_id) VALUES
('Gaji Freelance Website', 150000.00, '2024-07-17 00:18:18', 1, 1, 1);

CREATE TABLE daily_budget (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    percent INT,
    budged_prediction DECIMAL(10, 2),
    total DECIMAL(10, 2),
    status VARCHAR(100),
    start_week DATE,
    end_week DATE,
    finance_id BIGINT,
    user_id BIGINT
) ENGINE=InnoDB;

INSERT INTO daily_budget (date, percent, budged_prediction, total, status, start_week, end_week, finance_id, user_id) VALUES
('2024-07-16', 50, 50000.00, 10000.00, 'baik', '2024-07-14', '2024-07-21', 1, 1);

CREATE TABLE outcomes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    outcome DECIMAL(10, 2),
    times DATETIME,
    finance_id BIGINT,
    budgets_id BIGINT,
    daily_budget_id BIGINT,
    user_id BIGINT
) ENGINE=InnoDB;

INSERT INTO outcomes (title, outcome, times, finance_id, budgets_id, daily_budget_id, user_id) VALUES
('Ngeprint', 10000.00, '2024-07-14 08:00:00', 1, 1, 1, 1);
