use expertname;
insert into Questions(question, usable_functions, hint, answer) values ('Q. 중간고사 시험 공부가 하기 싫었던 홍길동 학생은 종강까지 앞으로 며칠 남았는지 계산해보려고 합니다.
DAYS 함수를 사용해서 오늘부터 종강일까지 며칠 남았는지 계산해주세요.', 'DAYS(종료일, 시작일)', '???', 'DAYS(C3,B3)');
insert into Questions(question, usable_functions, hint, answer) values ('Q. 홍길동 학생은 시험이 끝난 기념으로 놀다가 집에 돌아왔습니다.
영수증의 합계를 더해서 오늘 하루 동안 얼마나 돈을 썼는지 계산하고자 할 때, SUM 함수를 사용해서 합계를 계산해주세요.','SUM(더할 값1, 더할 값2 ...)\nSUM(시작 셀:마지막 셀)', '???', 'SUM(C3:C5)');
select * from Questions;