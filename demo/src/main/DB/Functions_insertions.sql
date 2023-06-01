use expertname;
insert into Functions values(NULL, "sum(인수1,인수2,…)", "인수들의 합을 구합");
insert into Functions values(NULL, "ROUND(인수,자릿수)", "인수를 자릿수로 반올림한 숫자를 구함");
insert into Functions values(NULL, "ROUNDUP(인수,자릿수)", "인수를 자릿수로 올림한 숫자를 구함");
insert into Functions values(NULL, "ROUNDDOWN(인수,자릿수)", "인수를 자릿수로 내림한 숫자를 구함");
insert into Functions values(NULL, "SUMIF(범위,조건,합계 범위)", "범위에서 조건을 검사하여 합계 범위에 해당하는 셀 합계를구함");
insert into Functions values(NULL, "ABS(숫자) ", "숫자의 절대값을 구함");
insert into Functions values(NULL, "MOD(인수,제수)", "인수를 제수로 나눈 결과의 나머지를 구함");
insert into Functions values(NULL, "TRUNC(인수,자릿수)", "지정한 자릿수만을 소수점 아래에 남기고 나머지 자리를 버림");
insert into Functions values(NULL, "INT(인수)", "인수를 넘지 않느 가장 가까운 정수를 구함");
insert into Functions values(NULL, "SQRT(숫자)", "숫자의 양의 제곱근을 구함");
insert into Functions values(NULL, "FACT(숫자)", "숫자의 계승값(1*2*3*…..*N) 구함");
insert into Functions values(NULL, "POWER(인수1,인수2)", "인수1을 인수2만큼 거듭제곱한 값을 구함");
insert into Functions values(NULL, "EXP(수치)", "자연로그의 밑수인 e(e2.7182182)를 수치만큼 거듭제곱한값으로 계산함");
insert into Functions values(NULL, "PRODUCT(수치1,수치2,…)", "수치를 모두 곱한 결과를 구함");
insert into Functions values(NULL, "SUMPRODUCT(배열1,배열2…)", "수치 배열에 각각 대응하는 요소의곱을 구하고 결과의 합을구함");
insert into Functions values(NULL, "AVERAGE(인수1,인수2,…)", "수들의 평균값을 구함");
insert into Functions values(NULL, "MAX(인수1,인수2,…)", "인수들 목록 중 최대값을 구함");
insert into Functions values(NULL, "MIN(인수1,인수2,…)", "인수들 목록 중 최소값을 구함");
insert into Functions values(NULL, "LARGE(배열,K)", "배열에서 K번째로 큰 값을 구함");
insert into Functions values(NULL, "SMALL(배열,K)", "배열에서 K번째로 작은값을 구함");
insert into Functions values(NULL, "RANK.AVG(값,참조 영역,[순위 결정 방법])", "참조영역 중에서 순위를 구함(순위같을시 평균수위반환)");
insert into Functions values(NULL, "RANK.EQ(값,참조영역,[순위결정방법])", "참조영역 중에서 순위를 구함 (순위 같을시 가장 높은 순위 반환");
insert into Functions values(NULL, "VAR(표본의 범위)", "표본의 범위에서 분산을  구함");
insert into Functions values(NULL, "STDEV(표본의 범위)", "표본의 범위 표준편차");
insert into Functions values(NULL, "COUNT(인수1,인수2,…)", "인수들에서 숫자가 들어있는 개수를 구함");
insert into Functions values(NULL, "COUNTIF(조건범위,조건)", "조건범위에서 조건에 맞는 셀의 개수를 구함");
insert into Functions values(NULL, "CHOOSE(인덱스 번호, 값1, 값2)", "조건범위에서 조건에 맞는 셀의 개수를 구함");
insert into Functions values(NULL, "YEAR(일련번호 또는 날짜 문자열)", "날짜의 연도 부분만 구함 ");
insert into Functions values(NULL, "MONTH(일련번호 또는 날짜 문자열)", "날짜의 월 부분만 구함 ");
insert into Functions values(NULL, "DAY(일련번호 또는 날짜 문자열)", "날짜의 일자 부분만 구함 ");
insert into Functions values(NULL, "HOUR(일련번호 또는 시간문자열)", "시간의 시 부분만 구함");
insert into Functions values(NULL, "MINUTE(일련번호 또는 시간문자열)", "시간의 분 부분만 구함");
insert into Functions values(NULL, "SECOND(일련번호 또는 시간문자열)", "시간의 초 부분만 구함");
insert into Functions values(NULL, "TODAY()", "컴퓨터 시스템의 현재 날짜를 구함");
insert into Functions values(NULL, "NOW()", "컴퓨터 시스템의 현재 날짜와 시간을 구함 ");
insert into Functions values(NULL, "DATE(연,월,일)", "지정한 연,월,일로 날짜 데이터를 만듬");
insert into Functions values(NULL, "TIME(시,분,초)", "지정한 시,분,초로 시간 데이터를 만듦");
insert into Functions values(NULL, "WEEKDAY(날짜 문자열,종류)", "날짜 문자열의 요일 일련번호를 구함");
insert into Functions values(NULL, "EDATE(시작 날짜, 개월 수)", "시작 날짜에 개월수를 더한 달의 마지막날짜의 일련번호를 구함");
insert into Functions values(NULL, "LEN(텍스트)", "텍스트의 문자 수를 구함");
insert into Functions values(NULL, "LEFT(텍스트,문자수)", "텍스트의 왼쪽에서 지정한 문자수만큼 텍스트를 추출함");
insert into Functions values(NULL, "MID(텍스트,시작 위치,문자수)", "텍스트의시작 위치에서부터 지정한 문자수만큼 텍스트를추출함");
insert into Functions values(NULL, "RIGHT(텍스트,문자수)", "텍스트의 오른쪽에서 지정한 문자수만큼 텍스트를 추출함");
insert into Functions values(NULL, "LOWER(텍스트)", "텍스트를 소문자로 변환함");
insert into Functions values(NULL, "UPPER(텍스트)", "텍스트를 대문자로 변환함");
insert into Functions values(NULL, "PROPER(텍스트)", "텍스트 첫 문자만 대문자로 변환하고, 나머지는 소문자로 변환함");
insert into Functions values(NULL, "TRIM(텍스트)", "단어 사이에 있는 한칸의 공백을 제외하고 텍스트의 공백을 모두 삭제함");
insert into Functions values(NULL, "REPLACE(텍스트1,시작 위치,문자수,텍스트2)", "텍스트1의 시작 위치로부터 해당 문자수만큼 텍스트2로 바꿈");
insert into Functions values(NULL, "SUBSTITUTE(텍스트1,텍스트2,텍스트2)", "텍스트1에서 텍스트 2를 텍스트 3으로 바꿈");
insert into Functions values(NULL, "VALUE(텍스트)", "텍스트를 숫자로 변환함");
insert into Functions values(NULL, "TEXT(숫자 값,표시 형식", "숫자 값을 표시 형식을 지정하여 텍스트로 변환함");
insert into Functions values(NULL, "REPT(반복할 텍스트,반복할 횟수)", "텍스트를 반복할 횟수만큼 표시");
insert into Functions values(NULL, "IF(조건식,값1,값2", "조건식이 참이면 값1을 표시, 거짓이면 값2를 표시");
insert into Functions values(NULL, "AND(조건1,조건2,….)", "모든 조건이 참이면 TRUE,나머지는 TRUE를 표시");
insert into Functions values(NULL, "OR(조건1,조건2,..)", "모든 조건이 거짓이면 FALSE, 나머지는 TRUE를 표시");
insert into Functions values(NULL, "TRUE()", "논리값을 TRUE로 표시");
insert into Functions values(NULL, "FALSE()", "논리값을 FALSE로 표시");
insert into Functions values(NULL, "NOT(논리식)", "논리식의 결과를 역으로 표시");
insert into Functions values(NULL, "IFERROR(수식,값)", "수식에서 오류가 발생할 경우 지정한 값을 반환하고, 그렇지 않으면 수식 결과를 반환함");
insert into Functions values(NULL, "ISBLANK(검사대상)", "검사 대상 셀이 공백 셀인지를 조사");
insert into Functions values(NULL, "ISERROR(검사대상)", "검사 대상에 에러 값인지를 조사");
insert into Functions values(NULL, "CELL(정보 유형 텍스트,[참조할 주소])", "참조 범위에서 시트를 읽는 순서에 따라 첫째 셀의 서식이나 위치 내용에 대한 정보를 제공함");
insert into Functions values(NULL, "LOOKUP(검색값,검사범위,대응범위)", "검사범위에서 검색값을 찾아 대응범위에서 같은 위치에 있는값을 표시");
insert into Functions values(NULL, "VLOOKUP(검색값,범위,열번호,[검색 유형])", "범위의 첫 열에서 검색값을 찾아, 지저한 열번호에서 같은 행에 있는 값을 표시");
insert into Functions values(NULL, "HLOOKUP(검색값,범위,행번호,[검색 유형])", "범위의 첫 행에서 검색값을 찾아,지정한 행번호에서 같은 열에 있는 값을 표시");