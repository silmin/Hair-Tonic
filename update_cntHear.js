function updateCntHear(cntHearLabel) {
    cntHearLabel.value++;
    cntHearLabel.text = "Hear Count : " + String(cntHearLabel.value);
    return cntHearLabel;
}