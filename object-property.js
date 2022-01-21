const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaa'},
    {id: 41, name: 'Moyouri'},
    {id: 52, name: 'Urmi'},
    {id: 61, name: 'Aliya'},
    {id: 91, name: 'Ovi'},
    {id: 110, name: 'Moyouri'},
    
]
const names= [];
const  studentName = students.map(s => s.name);
const  bigger = students.filter(s => s.id>72);
const biggerOne = students.find(s => s.id>90);
names.push(studentName);
console.log(biggerOne);