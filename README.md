## Introduction

이 튜토리얼은 React ui component library를 생성 및 게시하고 Github에서 호스팅하는 과정을 안내합니다.

이 튜토리얼이 끝나면 미래의 모든 React 프로젝트에서 다음을 수행할 수 있습니다.

```sh
npm install @hansanghyeon/react-component-library
```

```jsx
import MyCustomComponents from '@hansanghyeon/react-component-library

const MyApp = () => {
  return (
    <div>
      <MyCustomComponents />
    </div>
  )
}
```

## 전제조건 그리고 설정

이 프로젝트는 사용자다 다음 사항에 익숙하고 설치했다고 가정합니다.

- code editor/IDE
- npm, yarn
- package install (JavaScript 프로젝트에 패키지를 추가하는 방법을 알고있다고 가정)
- Bash, terminal 명령을 실행
- Git
- React
- Typescript

```sh
yarn init
```