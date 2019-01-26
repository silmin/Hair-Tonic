function updateCntHear(cntHearLabel) {
    cntHearLabel.value++;
    cntHearLabel.text = "Hear Count : " + String(cntHear);
    return cntHearLabel;
}