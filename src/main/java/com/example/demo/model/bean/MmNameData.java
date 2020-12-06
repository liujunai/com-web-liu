package com.example.demo.model.bean;

import java.io.Serializable;

public class MmNameData implements Serializable {

	private Long id;
	private String yyMM;
	private String cName;
	private String mMCount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getYyMM() {
		return yyMM;
	}

	public void setYyMM(String yyMM) {
		this.yyMM = yyMM;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getmMCount() {
		return mMCount;
	}

	public void setmMCount(String mMCount) {
		this.mMCount = mMCount;
	}
}
