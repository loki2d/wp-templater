<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<h2 class="ui-block__hedaer">Блок трансляции</h2>
<div class="ui-block__box">
  <div class="broadcast">
    <xsl:for-each select="broadcast/unit">
    <div class="broadcast-unit">
      <time class="broadcast-unit__time"><xsl:value-of select="time"/></time>
      <div class="broadcast-unit__body"><xsl:value-of select="text"/></div>
    </div>
    </xsl:for-each>
  </div>
</div>
</xsl:template>
</xsl:stylesheet>
