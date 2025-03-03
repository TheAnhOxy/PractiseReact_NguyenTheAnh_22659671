import React, { useReducer, useEffect, useRef, useMemo, useState } from 'react';
import '../Ex.css'; 

const initialState = {
    students: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return { ...state, students: [...state.students, action.payload] };
        case 'EDIT_STUDENT':
            return {
                ...state,
                students: state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                ),
            };
        case 'DELETE_STUDENT':
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload),
            };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('');
    const [score1, setScore1] = useState('');
    const [score2, setScore2] = useState('');
    const [editingId, setEditingId] = useState(null);
    const nameRef = useRef(null);
    const score1Ref = useRef(null);
    const score2Ref = useRef(null);

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        if (storedStudents) {
            dispatch({ type: 'ADD_STUDENT', payload: storedStudents });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(state.students));
    }, [state.students]);

    const handleAddStudent = () => {
        if (name && score1 && score2) {
            const newStudent = {
                id: Date.now(),
                name,
                score1: parseFloat(score1),
                score2: parseFloat(score2),
            };
            dispatch({ type: 'ADD_STUDENT', payload: newStudent });
            setName('');
            setScore1('');
            setScore2('');
            nameRef.current.focus();
        }
    };

    const handleEditStudent = (student) => {
        setEditingId(student.id);
        setName(student.name);
        setScore1(student.score1);
        setScore2(student.score2);
        nameRef.current.focus();
    };

    const handleUpdateStudent = () => {
        if (editingId) {
            dispatch({
                type: 'EDIT_STUDENT',
                payload: { id: editingId, name, score1: parseFloat(score1), score2: parseFloat(score2) },
            });
            setEditingId(null);
            setName('');
            setScore1('');
            setScore2('');
        }
    };

    const handleDeleteStudent = (id) => {
        dispatch({ type: 'DELETE_STUDENT', payload: id });
    };

    const calculateAverage = (score1, score2) => {
        return ((score1 + score2) / 2).toFixed(2);
    };

    return (
        <div className
        ="container">
            <h1>Quản lý sinh viên</h1>
            <input
                ref={nameRef}
                type="text"
                placeholder="Tên sinh viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                ref={score1Ref}
                type="number"
                placeholder="Điểm 1"
                value={score1}
                onChange={(e) => setScore1(e.target.value)}
            />
            <input
                ref={score2Ref}
                type="number"
                placeholder="Điểm 2"
                value={score2}
                onChange={(e) => setScore2(e.target.value)}
            />
            {editingId ? (
                <button onClick={handleUpdateStudent}>Sửa điểm</button>
            ) : (
                <button onClick={handleAddStudent}>Thêm sinh viên</button>
            )}

            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên sinh viên</th>
                        <th>Điểm 1</th>
                        <th>Điểm 2</th>
                        <th>Điểm trung bình</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {state.students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.score1}</td>
                            <td>{student.score2}</td>
                            <td>{calculateAverage(student.score1, student.score2)}</td>
                            <td>
                                <button onClick={() => handleEditStudent(student)}>Sửa</button>
                                <button onClick={() => handleDeleteStudent(student.id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;