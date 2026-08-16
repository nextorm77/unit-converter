# 단위 변환기 웹앱 (Unit Converter Web App)

웹 브라우저에서 서버 설치 없이 바로 실행할 수 있는 간단하고 직관적인 **단위 변환기**입니다. HTML5, Vanilla CSS, JavaScript(ES6)로 작성되었으며, 모듈화된 구조로 새 단위 및 카테고리 확장이 용이합니다.

## 🌟 주요 기능

- **실시간 자동 변환:** 입력값 변경 및 단위 선택 전환 시 별도 버튼 클릭 없이 즉시 정밀하게 결과가 반영됩니다.
- **다양한 카테고리 지원:**
  - 📏 **길이 (Length):** 미터(`m`), 센티미터(`cm`), 킬로미터(`km`), 인치(`in`), 피트(`ft`)
  - ⚖️ **무게 (Weight):** 킬로그램(`kg`), 그램(`g`), 파운드(`lb`), 온스(`oz`)
  - 📐 **넓이 (Area):** 제곱미터(`㎡`), 평(`평`), 제곱킬로미터(`㎢`), 제곱피트(`sq ft`), 헥타르(`ha`), 에이커(`ac`)
- **결과 소수점 자동 정돈:** 변환 결과는 최대 소수점 4자리까지 표시되며 불필요한 0은 자동으로 제거됩니다.
- **모던 카드 UI:** 반응형 레이아웃과 카드 형태의 깔끔한 디자인, 포커스 하이라이트 효과를 제공합니다.

## 📁 프로젝트 구조

프로젝트는 역할별로 명확히 분리된 3개의 기본 파일로 구성되어 있습니다.

```
unit-converter/
├── index.html   # 웹앱의 HTML 구조 및 레이아웃 정의
├── styles.css   # 카드 디자인, 반응형 폼 UI, 색상 및 포커스 스타일
└── script.js    # 단위 변환 알고리즘, 카테고리별 데이터 및 이벤트 처리
```

- [`index.html`](file:///home/nextorm/coding/unit-converter/index.html): 변환 종류 선택, 입력값 폼, 변환 결과 영역을 정의합니다.
- [`styles.css`](file:///home/nextorm/coding/unit-converter/styles.css): 모던한 카드형 UI와 부드러운 트랜지션 스타일을 담당합니다.
- [`script.js`](file:///home/nextorm/coding/unit-converter/script.js): 기준 단위(1m, 1kg, 1㎡)를 활용한 계산 로직 및 동적 셀렉트 박스 업데이트를 실행합니다.

## 🚀 실행 방법

1. 프로젝트 소스 코드를 다운로드하거나 클론합니다.
2. `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari, Firefox 등)에서 더블 클릭하여 실행합니다.
3. 별도의 웹 서버나 빌드 과정 없이 바로 사용할 수 있습니다.

## 🧮 변환 계산 원리

변환은 각 카테고리의 **기준 단위(Base Unit)**를 거쳐 계산됩니다.
- **길이 기준:** 미터 (`1 m`)
- **무게 기준:** 킬로그램 (`1 kg`)
- **넓이 기준:** 제곱미터 (`1 ㎡`)

$$\text{변환 결과} = \frac{\text{입력값}}{\text{입력 단위 비율}} \times \text{목표 단위 비율}$$

계산된 수치는 소수점 넷째 자리(`toFixed(4)`)까지 계산 및 정리되어 깔끔하게 표시됩니다.

## 🛠 커스터마이징 (새로운 단위 및 카테고리 추가)

`script.js` 파일 내의 `unitsData`와 `unitLabels` 객체를 수정하여 쉽게 새로운 단위를 추가할 수 있습니다.

### 1. 단위 추가 예시 (길이 '야드(yd)' 추가)

`script.js`에 기준 단위(`m`) 대비 비율과 표시 이름을 추가합니다.

```javascript
// unitsData 객체 내 length에 추가
unitsData.length['yd'] = 1.09361;

// unitLabels 객체에 표시 라벨 추가
unitLabels['yd'] = '야드 (yd)';
```

### 2. 새로운 카테고리 추가 예시 (예: 부피, 온도 등)

1. `index.html`의 카테고리 `<select id="category">` 내부에 새로운 옵션을 추가합니다:
   ```html
   <option value="volume">부피 (Volume)</option>
   ```
2. `script.js`의 `unitsData`와 `unitLabels`에 해당 카테고리와 단위 정보를 추가합니다.

