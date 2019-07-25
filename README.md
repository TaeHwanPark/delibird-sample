## 구조

- `vue-cli`를 사용하여 프로젝트 생성
- `bootstrap-vue`를 이용하여 컴포넌트 작업
- `core-ui`를 이용하여 bootstrap style 고도화

### 코드 컨벤션

1. API URL → KebabCase
2. 쿼리 파라미터 → SnakeCase
3. 컴포넌트 호출 → KebabCase
4. 클래스, 콤포넌트 정의 → UpperCamelCase
5. 함수, 변수 정의 → CamelCase
6. json data → SnakeCase
7. date format

    `UTC(yyyy-MM-dd'T'HH:mm:ss)`

    frontend에서는 접속한 지역에 따라 해당 지역의 시간으로 표시

    위 기능을 수행하기 위해 현재는 `moments.js` 를 사용 중입니다.

### Indent

양식: Tab size, Indent, Continuation indent

1. HTML ⇒ 2, 2, 4
2. JavaScript ⇒ 2, 2, 4
3. JSON ⇒ 2, 2, 4

### 전역 변수

전역 변수 사용은 최대한 자제하고 있지만, 꼭 필요한 경우라는 Cookie를 이용하고 있습니다.

예제에서는 token을 cookie로 사용하고 있습니다.

    // api 객체를 만들때, cookie에서 token을 가져 옵니다.
    api = new CommonApi(Cookies.get('common_backend_url'), Cookies.get('token'));

### API Class

Backend와 통신 하는 부분은 **Api Class에 정의되어 있습니다.

Backend는 Microservice 형태로 구성되어 있으며, 각 Microservice에 대응하는 Api** Class를 정의합니다.

## i18n

`vue-i18n`을 이용하여 다국어를 지원합니다.

## Validation

`vee-validate`를 이용하여 input에 대해 validation을 수행하고 있습니다.

예제 소스에는 추가 하지 않았습니다.

## Mixin

공통으로 사용할 수 있는 함수들은 mixin으로 분리 했으며, mixin역시 mixin component를 만들어서 재사용 가능하게 작업하고 있습니다.

## 라이브러리 컴파일

`vue-cli-service`의 library 컴파일을 이용하여 library 컴파일을 하고 있으며, 컴파일된 라이브러리는 npm에 배포하고 있습니다.

- 컴파일 명령 예시

    `vue-cli-service build --target lib --name orderman-web-component`