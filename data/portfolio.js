/*
  STUDIO SOLA 포트폴리오 데이터
  ─────────────────────────────────────────────
  이 파일만 고치면 포트폴리오(채널·카테고리·영상)와 사이트 글자·폰트가 바뀝니다.
  직접 고치기 어렵다면 같은 폴더의 editor.html(사이트 편집기)을 쓰세요.

  channels   : 채널별 카드 (프로필 사진이 있는 카드)
  categories : 카테고리별 카드 (아이콘 카드)

  공통 항목
    name   : 카드/팝업에 보이는 이름
    chips  : 이름 아래 작은 칩. color 는 "blue" | "gray" | "orange"
    tags   : 필터 버튼 연결. "chat"(저챗) / "game"(게임) / "mv"(MV) 중 여러 개 가능
    videos : 팝업에 나오는 영상. 맨 위 영상이 대표 영상(크게 표시)
      url   : 유튜브 주소 (watch?v=… / youtu.be/… / shorts/… 모두 가능)
      title : 영상 제목
      label : 썸네일 왼쪽 아래 작은 글씨 (보통 업로드 날짜)
      thumb : (선택) 직접 넣을 썸네일 이미지. 비우면 유튜브 썸네일이 자동으로 들어갑니다

  channels 전용
    image : 프로필 사진 파일 (assets 폴더에 넣고 "assets/파일이름.png" 처럼 적기)
    link  : 채널 주소 ("채널 바로가기" 버튼). 비우면 버튼이 숨겨집니다

  categories 전용
    desc  : 카드의 한 줄 설명
    icon  : "chat" | "game" | "music" | "lock"
    color : 아이콘 타일 색 (예: "#1F5FD6")
  ─────────────────────────────────────────────
  SITE_TEXT (파일 맨 아래) : 정보·경력 캡슐·가격표·팝업의 글자와 폰트를 바꾼 내용
    texts  : 바꾼 글자 ("**굵게**", 줄바꿈 사용 가능)
    styles : 바꾼 폰트 { fontFamily, fontSize(px), fontWeight, color }
    lists  : 가격 카드의 항목 목록
    career : 경력 캡슐 목록 (없으면 기본 캡슐이 나와요)
    → 여기는 editor.html 의 "정보", "경력 캡슐", "가격표", "팝업 글자" 탭에서 고치는 걸 추천해요.
*/
window.PORTFOLIO = {
  "channels": [
    {
      "name": "채주노",
      "image": "assets/d6736c0a717d13f12fdc81942aad6a86.png",
      "chips": [{"text":"메인 편집자","color":"blue"},{"text":"2024","color":"gray"}],
      "link": "https://www.youtube.com/@JuNo_VLRT",
      "tags": ["game"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=R3uDBBFKqSo","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.1 ]","label":"2024.09.06."},
        {"url":"https://www.youtube.com/watch?v=rwbs2s6Ak-0","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.0 ]","label":"2024.08.30."},
        {"url":"https://www.youtube.com/watch?v=PcAmdfeKL38","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.2 ]","label":"2024.09.13."},
        {"url":"https://www.youtube.com/watch?v=aPcpYrRhWGQ","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.3 ]","label":"2024.09.20."},
        {"url":"https://www.youtube.com/watch?v=XWeMOgHZArI","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.4 ]","label":"2024.09.28."},
        {"url":"https://www.youtube.com/watch?v=qKlbURlG7Wk","title":"프로게이머가 되고 싶은 '자퇴생' 의 이야기 [ Ep.End ]","label":"2024.10.04."}
      ]
    },
    {
      "name": "팔칠",
      "image": "assets/4d4d41166d39a763df72c65c0a1d06e0.png",
      "chips": [{"text":"외주 편집자","color":"blue"},{"text":"2025 ~","color":"orange"}],
      "link": "https://www.youtube.com/@%ED%8C%94%EC%B9%A0",
      "tags": ["chat"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=Yp-NwPtch-o","title":"버튜버 콘서트 처음 다녀온 후기","label":"2025.09.27."}
      ]
    },
    {
      "name": "강태풍의 로블록스",
      "image": "assets/427407a405a0224cb5dd86cd92866ca6.png",
      "chips": [{"text":"메인 편집자","color":"blue"},{"text":"2025 ~","color":"orange"}],
      "link": "https://www.youtube.com/@%EA%B0%95%ED%83%9C%ED%92%8D%EB%A1%9C%EB%B8%94%EB%A1%9D%EC%8A%A4",
      "tags": ["game"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=kOtsl42SU-0","title":"로블록스 유튜버가 현실에 존재한다면?ㅋㅋㅋㅋ","label":"2026.08.13."},
        {"url":"https://www.youtube.com/watch?v=BLXTKpnX2yM","title":"여동생이 99일을 하다 울었습니다.. 내 동생은 나만 울릴 수 있다!","label":"2026.05.14"},
        {"url":"https://www.youtube.com/watch?v=r7bsSj4yeq4","title":"라이벌 여자 vs 남자 싸움의 승자는?","label":"2026.05.24."},
        {"url":"https://www.youtube.com/watch?v=_q6-M-By9qI","title":"로블록스 먹방 ASMR vs 현실 먹방 ASMR","label":"2026.07.16."},
        {"url":"https://www.youtube.com/watch?v=MLcWmUjLnVk","title":"친구 몰래 무선 키보드로 장난쳤더니... 제대로 빡쳤습니다ㅋㅋㅋ","label":"2026.07.30."},
        {"url":"https://www.youtube.com/watch?v=M6gn0qisZ8U","title":"로블록스2에 접속했습니다ㅋㅋㅋ 완전 신기한데?!","label":"2026.08.21."},
        {"url":"https://www.youtube.com/watch?v=69hq7AiRlaM","title":"실제로 일어난 충격적인 사건들을 로블록스에서 찾아봤습니다...","label":"2026.09.18."},
        {"url":"https://www.youtube.com/watch?v=WawvEWT5WMY","title":"로블록스에 북한 게임이 있다고?ㅋㅋㅋ 충격적이다ㅋㅋㅋㅋ","label":"2026.10.01."},
        {"url":"https://www.youtube.com/watch?v=ruIbiqRMoYs","title":"로블록스에서 1로벅스로 할 수 있는 것들","label":"2026.10.20."}
      ]
    },
    {
      "name": "코몽의 마인크래프트",
      "image": "assets/e5dc2405642746feb2338918ad3cd194.png",
      "chips": [{"text":"메인 편집자","color":"blue"},{"text":"2026","color":"gray"}],
      "link": "https://www.youtube.com/@%EC%BD%94%EB%AA%BD%EB%A7%88%EC%9D%B8%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8/featured",
      "tags": ["game"],
      "videos": [
        {"url":"https://youtu.be/5Z0aKSSOk8A?si=vzTedW1AVG8n46fm","title":"만지는 모든 것이 금이 되는 능력을 얻었습니다","label":"2026.03.28."},
        {"url":"https://www.youtube.com/watch?v=c7IO8eT1jx4","title":"마인크래프트에서 다이아를 훔치는 신박한 6가지 방법","label":"2026.03.02."},
        {"url":"https://www.youtube.com/watch?v=GbNCcWBmrDY","title":"미친놈들끼리 TNT 폭탄돌리기하면 벌어지는 일ㅋㅋㅋㅋㅋㅋㅋ","label":"2026.03.10."},
        {"url":"https://www.youtube.com/watch?v=QcYvI4Bk2WM","title":"걸을 때마다 빨라지는 마인크래프트ㅋㅋㅋㅋ","label":"2026.03.20."},
        {"url":"https://www.youtube.com/watch?v=-_UufWgkOOY","title":"알아두면 유용한 마인크래프트 50가지 함정들","label":"2026.05.02."}
      ]
    },
    {
      "name": "혀누",
      "image": "assets/83a67e54072c1282e26d232a76d100a7.png",
      "chips": [{"text":"고정 편집자","color":"blue"},{"text":"2026 ~","color":"orange"}],
      "link": "https://www.youtube.com/@%ED%98%80%EB%88%84965",
      "tags": ["game"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=KZvxh64NLj8","title":"\"자존심 강한 두 천재의 만남\"","label":"2026.10.18."},
        {"url":"https://www.youtube.com/watch?v=29HgI9NiGkw","title":"내가 왜 니네 관리자야.","label":"2026.08.22."},
        {"url":"https://www.youtube.com/watch?v=txSbS_708hg","title":"이렇게 하면 나오시는 거죠 군주님?","label":"2026.08.28."},
        {"url":"https://www.youtube.com/shorts/wvjBEmFp3vs","title":"이렇게 무서워서 취직 하겠냐?","label":"2026.06.22."},
        {"url":"https://www.youtube.com/shorts/j96l2DTiiT4","title":"얘네 좋다며 얘네 좋다며 얘네 좋다며 얘네 좋다며 얘네 좋다며 얘네 좋다며","label":"2026.07.03."},
        {"url":"https://www.youtube.com/shorts/oDSiJExDgAU","title":"지금까지 로보토미 시리즈를 시청해주신 여러분들 감사드립니다.","label":"2026.07.09."},
        {"url":"https://www.youtube.com/shorts/5-XB8jOOez8","title":"진짜 한동안 도넛은 못 쳐먹겠네 ㅠㅠㅠㅠㅠㅠㅠㅠ","label":"2026.08.30."},
        {"url":"https://www.youtube.com/shorts/wECwLRZumKE","title":"아니 환상체 제압용 가스탄 있었으면 나도 백야 잡았지;;;;","label":"2026.09.06."}
      ]
    },
    {
      "name": "요시요",
      "image": "assets/0a5c50001fb8f082727a60016bd33f9c.png",
      "chips": [{"text":"외주","color":"blue"},{"text":"공모전","color":"blue"}],
      "link": "https://www.youtube.com/@Yocyo",
      "tags": ["chat"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=Yeyl-Pyl0Hk","title":"요시요 아카데미 2기, 단 두 달 만에 미친 결과를 보여주셨습니다.. [요시요 아카데미 공모전 1위]","label":"2025.09.11."},
        {"url":"https://www.youtube.com/watch?v=5wMAANztT3s","title":"요시요의 영상 편집 교육 4기 모집 시작합니다.","label":"2025.12.28."},
        {"url":"https://www.youtube.com/watch?v=fMQ4SdeLyTU","title":"게임 영상 편집할 때 가장 조심해야 하는 것..","label":"2026.05.25."}
      ]
    }
  ],
  "categories": [
    {
      "name": "저챗 외주 작업물",
      "desc": "저스트 채팅 · 소통 방송 편집",
      "icon": "chat",
      "color": "#1F5FD6",
      "chips": [{"text":"저스트 채팅","color":"blue"},{"text":"외주","color":"gray"}],
      "tags": ["chat"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=Yp-NwPtch-o","title":"버튜버 콘서트 처음 다녀온 후기","label":"팔칠"},
        {"url":"https://www.youtube.com/watch?v=fMQ4SdeLyTU","title":"게임 영상 편집할 때 가장 조심해야 하는 것..","label":"요시요"}
      ]
    },
    {
      "name": "게임 외주 작업물",
      "desc": "게임 플레이 · 리액션 편집",
      "icon": "game",
      "color": "#5B3FE0",
      "chips": [{"text":"게임","color":"blue"},{"text":"외주","color":"gray"}],
      "tags": ["game"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=MHR1IxT18ng","title":"100일 안에 강화된 용 토벌하기","label":"김잔이"}
      ]
    },
    {
      "name": "MV • PV 작업물",
      "desc": "MV · PV · MAD 편집",
      "icon": "music",
      "color": "#0A7285",
      "chips": [{"text":"MV · PV","color":"blue"},{"text":"개인작","color":"gray"}],
      "tags": ["mv"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=7uiGWzwh5HM","title":"젠레스 존 제로 [호시미 미야비] MAD","label":"2025.07.25."},
        {"url":"https://www.youtube.com/watch?v=OxSACRh7l50","title":"'에메 - 잔향산가' 가사 영상","label":"2026.02.19."}
      ]
    },
    {
      "name": "일부공개 작업물",
      "desc": "개인적으로 제작된 영상 (외주X)",
      "icon": "lock",
      "color": "#B4430E",
      "chips": [{"text":"개인작","color":"gray"}],
      "tags": ["chat","game"],
      "videos": [
        {"url":"https://www.youtube.com/watch?v=xU6YNZ-t1_I","title":"늦잠님 썰 영상","label":""},
        {"url":"https://www.youtube.com/watch?v=mDNHcV9A8bA","title":"발로란트 예능 영상","label":""}
      ]
    }
  ]
};

/* 아래는 editor.html 의 정보·경력 캡슐·가격표·팝업 탭에서 바꾼 글자와 폰트예요 */
window.SITE_TEXT = {
  "texts": {
    "info.t48": "남성",
    "info.t49": "군 여부"
  },
  "styles": {},
  "lists": {}
};
