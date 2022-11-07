[깃 명령어]
git checkout -b feat/# : 브런치 만들기
git checkout feat/# : 브런치 이동
git add . : 스테이징
git commit -m "feat: 기능명" : 커밋
git push origin feat/# : 푸시
풀리퀘스트 날리기

[로직 이슈]
로직: 영화 장르의 표시
    title 밑에 0.5rem 사이즈로 Genre: Action, Comedy, ... 등으로 해당 영화의 모든 장르 표시
    arr.genres 배열 안에 있음
    arr.join(' ,')을 사용할 것
    gray color로 줄 것
로직: 영화 상세정보 토글 만들기
    * 리스트를 클릭하면 a 태그로 이동하는 것이 아니라 리스트 아래쪽에, 이하 정보들의 표시를 토글로 on off한다.
    타이틀: title_long
    장르: genres
    런타임: runtime
    평점: rating
    시놉시스: synopsis
    토렌트 다운로드 링크: torrents
    * 선택한 id만 나올 필요는 일단 없지만, 상세정보 컴포넌트는 분리해서 관리한다.

[리팩토링 이슈]
퍼포먼스튜닝: MovieList 컴포넌트 랜더링 최적화

[옵션]
리팩토링: TodoList API를 불러와서 투두리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/todos
리팩토링: UserList API를 불러와서 유저리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/users
퍼포먼스튜닝: TodoList 컴포넌트 랜더링 최적화
퍼포먼스튜닝: UserList 컴포넌트 랜더링 최적화
