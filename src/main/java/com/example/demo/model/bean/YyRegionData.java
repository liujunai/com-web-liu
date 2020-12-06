package com.example.demo.model.bean;

import java.io.Serializable;

public class YyRegionData implements Serializable {

	private Long id;
	private String yy;
	private String cRegion;
	private String cCount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getYy() {
		return yy;
	}

	public void setYy(String yy) {
		this.yy = yy;
	}

	public String getcRegion() {
		return cRegion;
	}

	public void setcRegion(String cRegion) {
		this.cRegion = cRegion;
	}

	public String getcCount() {
		return cCount;
	}

	public void setcCount(String cCount) {
		this.cCount = cCount;
	}
}
