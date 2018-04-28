var xhr = new XMLHttpRequest();      
xhr.onreadystatechange = function() {
    if(this.readyState==4 && this.status==200) {
        var text = JSON.parse(this.responseText);
        var gradesList = text.gradesList;  //Grades
        var ul = document.getElementById('index');  //unordered list for Content
        var qa = [];  //questions for every subject
        var chapters = [];  //all chapters
        var count = [];  //number of questions in each chapter
        var ulqa = document.getElementById('QA');  //unordered list for Question/Answer
        /*
        Loop for Grades
        */
        for(let i = 0; i < gradesList.length; i++) {
            var gradeName = gradesList[i].name;
            var li = document.createElement('li');  //list-item in gradesList
            ul.appendChild(li);
            var h2 = document.createElement('h2');  //contains gradeName
            h2.innerHTML=gradeName;
            li.appendChild(h2);

            var subjectList = gradesList[i].subjectList;  //Subjects
            var ulSubject = document.createElement('ul');  //unordered list for subjects
            li.appendChild(ulSubject);
            /*
            Loop for Subjects
            */
            for(let j = 0; j < subjectList.length; j++) {
                var subjectName = subjectList[j].name;
                var liSubject = document.createElement('li');  //list-item in subjectList
                ulSubject.appendChild(liSubject);
                var h3 = document.createElement('h3');  //contains subjectName
                h3.innerHTML=subjectName;
                liSubject.appendChild(h3);

                var chapterList = subjectList[j].chapterList;
                var ulChapter = document.createElement('ul');  //unordered list for chapters
                liSubject.appendChild(ulChapter);
                /*
                Loop for Chapter
                */
                for(let k = 0; k < chapterList.length; k++) {
                    var chapterName = chapterList[k].name;
                    var liChapter = document.createElement('li');  //list-item in chapterList
                    ulChapter.appendChild(liChapter); 
                    var h4 = document.createElement('h4');  //contains chapterName
                    h4.innerHTML=chapterName;
                    liChapter.appendChild(h4);

                    chapters.push(h4);
                    /*
                    assigns pointer cursor to all the chapters when pointing over it
                    */
                    h4.style.cursor='pointer';  

                    var questionList = chapterList[k].questionList;
                    var c=0;  //for counting number of question/answer in each chapter
                    for(let l = 0; l < questionList.length; l++) {
                        var question = questionList[l].question;
                        var answer = questionList[l].answer;
                        var liqa = document.createElement('li');  //list-item for Question/Answer
                        ulqa.appendChild(liqa);
                        var pq = document.createElement('p');  //contains Question
                        var pa =document.createElement('p');  //contains Answer
                        pq.innerHTML='Q'+(l+1)+') '+question;
                        pa.innerHTML='Ans) '+answer;
                        liqa.appendChild(pq);
                        liqa.appendChild(pa);
                        qa.push(liqa);
                        c++;
                    }
                    count.push(c);
                }
            }
        }
        chapters[0].style.fontWeight='bold';  //bolds the name of first chapter
        /*
        Loop to display the question/answer for first chapter 
        */
        for(let i=0;i<count[0];i++) {
            qa[i].style.display='block';
        }
        for(let i = 0; i < chapters.length; i++) {
            chapters[i].addEventListener('click', change(i));
        }
        /*
        Function to change the question/answer when clicked on a chapter
        */
        function change(i) {
            return function() {
                var sum=0;
                /*
                hides all question/answer
                */
                for(let i in qa) {
                    qa[i].style.display='none';
                }
                /*
                unbolds all the chapter names
                */
                for(let i in chapters) {
                    chapters[i].style.fontWeight='lighter';
                }
                for(let a = 0; a < i; a++) {
                    sum+=count[a];
                }
                /*
                to display cut=rrent chapter question/answer
                */
                for(var b = sum; b < sum+count[i]; b++) {
                    qa[b].style.display='block';
                }
                chapters[i].style.fontWeight='bold';  //bolds the current chapter name
            };
        }
    }
};
xhr.open('GET', 'grade.json', true);
xhr.send();