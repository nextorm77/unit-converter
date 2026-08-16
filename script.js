// DOM 요소 선택
const categorySelect = document.getElementById('category');
const inputUnitSelect = document.getElementById('inputUnit');
const outputUnitSelect = document.getElementById('outputUnit');
const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');

// 기준 단위를 1로 잡았을 때의 각 단위별 비율
const unitsData = {
    length: {
        'm': 1,
        'cm': 100,
        'km': 0.001,
        'inch': 39.3701,
        'ft': 3.28084
    },
    weight: {
        'kg': 1,
        'g': 1000,
        'lb': 2.20462,
        'oz': 35.274
    }
};

// 화면에 표시될 단위의 이름
const unitLabels = {
    'm': '미터 (m)', 'cm': '센티미터 (cm)', 'km': '킬로미터 (km)', 'inch': '인치 (in)', 'ft': '피트 (ft)',
    'kg': '킬로그램 (kg)', 'g': '그램 (g)', 'lb': '파운드 (lb)', 'oz': '온스 (oz)'
};

// 카테고리(길이/무게) 변경 시 Select 박스 옵션 업데이트
function updateUnits() {
    const category = categorySelect.value;

    // 기존 옵션 초기화
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    // 선택된 카테고리의 단위들을 추가
    for (let unit in unitsData[category]) {
        inputUnitSelect.add(new Option(unitLabels[unit], unit));
        outputUnitSelect.add(new Option(unitLabels[unit], unit));
    }
    
    // 초기 설정: 입력 단위와 출력 단위가 다르게 보이도록 설정
    if (outputUnitSelect.options.length > 1) {
        outputUnitSelect.selectedIndex = 1;
    }

    convert(); // 단위 목록이 업데이트되면 재계산
}

// 실제 단위 변환 계산 로직
function convert() {
    const category = categorySelect.value;
    const inputAmount = parseFloat(inputValue.value);
    const inputUnit = inputUnitSelect.value;
    const outputUnit = outputUnitSelect.value;

    // 입력값이 비어있거나 숫자가 아니면 결과창 비우기
    if (isNaN(inputAmount)) {
        outputValue.value = '';
        return;
    }

    // 계산 방식: (입력값 / 입력단위비율) = 기준단위값 -> 기준단위값 * 목표단위비율 = 최종값
    const baseAmount = inputAmount / unitsData[category][inputUnit];
    const result = baseAmount * unitsData[category][outputUnit];

    // 결과를 소수점 4자리까지 표시 (불필요한 0은 자동 제거됨)
    outputValue.value = parseFloat(result.toFixed(4));
}

// 이벤트 리스너 등록 (사용자가 입력하거나 옵션을 바꿀 때마다 실행)
categorySelect.addEventListener('change', updateUnits);
inputValue.addEventListener('input', convert);
inputUnitSelect.addEventListener('change', convert);
outputUnitSelect.addEventListener('change', convert);

// 앱이 처음 로드될 때 드롭다운 초기화 및 실행
updateUnits();