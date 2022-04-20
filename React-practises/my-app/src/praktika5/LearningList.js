import React from 'react';
import LearningCode from './LearningCode';
import { useState } from 'react';

function LearningList() {
	const learningList = [
		{
			id: 1,
			img:
				'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1185554321',
			language: 'Aš mokausi HTML',
			status: false
		},
		{
			id: 2,
			img:
				'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?k=20&m=1224500457&s=612x612&w=0&h=LpjdY6okVWiKh8LT_LqcXz53kWaXVf47ThXKwMcCoHI=',
			language: 'Aš mokausi CSS',
			status: false
		},
		{
			id: 3,
			img:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01TuGoqPAR7Lv4qHax4-G1krG9SDGJ9GBY_Ug_hEZyP0p2__-C8ZfmnE1gsq_DVHiqEY&usqp=CAU',
			language: 'Aš mokausi JS',
			status: false
		}
	];

    const [postStatus, setPostStatus] = useState(learningList);

    function changeStatus(id) {
        const updateStatus = [...postStatus];
        updateStatus.forEach((data) => {
            if (data.id === id) {
                data.status = true;
            }
        });
        setPostStatus(updateStatus);
    }

    const learningListData = postStatus.map((data) => {
        return (
        <LearningCode
        id={data.id}
        lang={data.language}
        img={data.img}
        status={data.status}
        changeStatus={changeStatus} />
    );
        
    });

	return <>{learningListData}</>
}

export default LearningList;
