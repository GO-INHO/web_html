function form_Check() {
  /*if(form1.toname.value == ''){
    alert('수신인 이름을 입력해 주세요.');
    form1.toname.focus();
    return;
  }
  if(form1.tomail.value == ''){
    alert('수신인 E-mail주소를 입력해 주세요.');
    form1.tomail.focus();
    return;
  }*/
  if (form1.name.value == '') {
    alert('이름을 입력해 주세요.');
    form1.name.focus();
    return;
  }

  if (form1.dong.value == '') {
    alert('동호수를 입력해 주세요.');
    form1.dong.focus();
    return;
  }
  if (form1.hosu.value == '') {
    alert('동호수를 입력해 주세요.');
    form1.hosu.focus();
    return;
  }
  if (form1.hp1.value == '') {
    alert('전화번호를 입력해 주세요.');
    form1.hp1.focus();
    return;
  }
  if (form1.hp2.value == '') {
    alert('전화번호를 입력해 주세요.');
    form1.hp2.focus();
    return;
  }
  if (form1.hp3.value == '') {
    alert('전화번호를 입력해 주세요.');
    form1.hp3.focus();
    return;
  }
  if (form1.email.value == '') {
    alert('E-mail 주소를 입력해 주세요.');
    form1.email.focus();
    return;
  }
  if (form1.cafeid.value == '') {
    alert('입주자카페 활동아이디를 입력해 주세요.');
    form1.cafeid.focus();
    return;
  }
  if (form1.cafenickname.value == '') {
    alert('입주자카페 닉네임을 입력해 주세요.');
    form1.cafenickname.focus();
    return;
  }

  if (form1.address.value == '') {
    alert('계약자 주소를 입력해 주세요.');
    form1.address.focus();
    return;
  }

  if (form1.output.value == '') {
    alert('서명을 해 주세요.');
    form1.output.focus();
    return;
  }
  if (form1.checkbox1.checked == false) {
    alert('개인정보수집 및 활용 동의를 해주세요.');
    form1.checkbox1.focus();
    return;
  }
  if (form1.checkbox2.checked == false) {
    alert('위임장 제출확인 동의를 해주세요.');
    form1.checkbox2.focus();
    return;
  }

  if (!confirm('위임장을 발송 하겠습니까?')) return;
  form1.submit();
}