
const chartFinance = [
    {
        "day" : "06/07/2024",
        "outline" :  70.000,
    },{
        "day" : "07/07/2024",
        "outline" :  80.000,
    },{
        "day" : "08/07/2024",
        "outline" :  50.000,
    },{
        "day" : "09/07/2024",
        "outline" :  123.000,
    },{
        "day" : "10/07/2024",
        "outline" :  30.000,
    },{
        "day" : "11/07/2024",
        "outline" :  67.000,
    },{
        "day" : "12/07/2024",
        "outline" :  90.000,
    }
]
const dashboardTask = [
    {
        'id': 1,
        'title': 'Belajar Website',
        'description': 'HTML : Belajar Website',
        'start_time': '09:00',  // Ensure time format is HH:MM:SS
        'end_time': '12:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 1,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '13:00',  // Ensure time format is HH:MM:SS
        'end_time': '15:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 2,
        'title': 'Belajar Pemerograman C',
        'description': 'Bootcamp Devhive : Belajar Pemerograman C',
        'start_time': '15:00',  // Ensure time format is HH:MM:SS
        'end_time': '17:00',    // Ensure time format is HH:MM:SS
        'category': 'schedule',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'sedang berlangsung',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'schedule',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 3,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '17:00',  // Ensure time format is HH:MM:SS
        'end_time': '18:00',    // Ensure time format is HH:MM:SS
        'category': 'task',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'task',            // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    }
];
const notes = [
    {
        "id" : 1,
        "title" : "Title Notes",
        "content" : "Contenes Notes" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    }, {
        "id" : 2,
        "title" : "Title Notes 2",
        "content" : "Contenes Notes 2" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    },  {
        "id" : 3,
        "title" : "Title Notes 3",
        "content" : "Contenes Notes 3" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    },  {
        "id" : 4,
        "title" : "Title Notes 4",
        "content" : "Contenes Notes 4" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",

        "status" : "private",
        "user_id" : 1,
    }
]
const target = [
    {
        id : 1,
        "title" : "Kurusin badan ",
        "description" : "Aku mau Kurusin badan ",
    },  {
        id : 2,
        "title" : "Aku mau kaya ",
        "description" : "Aku mau kaya ",
    }
]
const schedule = [
    {
        'id': 1,
        'title': 'Belajar Website',
        'description': 'HTML : Belajar Website',
        'start_time': '09:00',  // Ensure time format is HH:MM:SS
        'end_time': '12:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'color': 'red',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 1,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '13:00',  // Ensure time format is HH:MM:SS
        'end_time': '15:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'color': 'yellow',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 2,
        'title': 'Belajar Pemerograman C',
        'description': 'Bootcamp Devhive : Belajar Pemerograman C',
        'start_time': '15:00',  // Ensure time format is HH:MM:SS
        'end_time': '17:00',    // Ensure time format is HH:MM:SS
        'category': 'schedule',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'color': 'green',
        'status': 'sedang berlangsung',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'schedule',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 3,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '17:00',  // Ensure time format is HH:MM:SS
        'end_time': '18:00',    // Ensure time format is HH:MM:SS
        'category': 'task',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'belum mulai',
        'color': 'blue',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'task',            // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'color': 'yellow',

        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'color': 'yellow',

        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    }
    , {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'color': 'yellow',

        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    }
    , {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'color': 'yellow',

        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    }
];

const mainDashboard =[
    {
        'id' :1,
        'title' : "Schedule",
        'icon' : "schedule.svg",
        'quantity' : "10",
    },{
        'id' :2,
        'title' : "Planning",
        'icon' : "planning.svg",
        'quantity' : "10",
    },
    {
        'id' :3,
        'title' : "Financial",
        'icon' : "finance.svg",
        'quantity' : "10",
    },
    {
        'id' :4,
        'title' : "Notes",
        'icon' : "note.svg",
        'quantity' : "10",
    },
];

const taskAll = [
    {
        'id': 1,
        'title': 'Belajar Website',
        'category': 'task',
        'task' : [
            {
                'id' : 1,
                'title' : 'Belajar HTML',
                'status': 'selesai',
                'task_id' : 1
            } ,
            {
                'id' : 2,
                'title' : 'Belajar CSS',
                'status': 'selesai',
                'task_id' : 1
            } ,
            {
                'id' : 3,
                'title' : 'Belajar JS',
                'status': 'selesai',
                'task_id' : 1
            } ,
        ],
        'percent' : 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'color': 'red',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1
    }
];


module.exports = {
    chartFinance, dashboardTask, notes, target, schedule, taskAll, mainDashboard
}

