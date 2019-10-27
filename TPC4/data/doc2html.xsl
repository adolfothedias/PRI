<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="doc">
        <html>
            <head>
                <title><xsl:value-of select="//tit"/></title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="/w3.css"/>
            </head>
        </html>
        <body>
            <div class="w3-container w3-orange">
                <h1><xsl:value-of select="//tit"/></h1>
            </div>
            <xsl:apply-templates/>
            <footer class="w3-container w3-orange">
                <h4>Feito por Carlos Barbosa</h4>
            </footer>
        </body>
    </xsl:template>
    
    <xsl:template match="prov">
        <div class="w3-container w3-sand w3-padding">
            <b>Província:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>

    <xsl:template match="tit">
        <div class="w3-container w3-sand w3-padding">
            <b>Título:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>
    
    <xsl:template match="local">
        <div class="w3-container w3-sand w3-padding">
            <b>Local:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>
    
    <xsl:template match="prof">
        <div class="w3-container w3-sand w3-padding">
            <b>Profissão:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>
    
    <xsl:template match="from">
        <div class="w3-container w3-sand w3-padding">
            <b>Local de Origem:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>
    
    <xsl:template match="musico">
        <div class="w3-container w3-sand w3-padding">
            <b>Músico:</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>
    
    <xsl:template match="obs">
        <div class="w3-container w3-sand w3-padding">
            <b>Observação:</b> <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="file">
        <div class="w3-container w3-sand w3-padding">
            <b>Ficheiro (Extensão do tipo <xsl:value-of select="@t"/>):</b> <xsl:value-of select="."/>
        </div>
    </xsl:template>

    <xsl:template match="intxt">
        <div class="w3-container w3-sand w3-padding">
            <b>Instrumento:</b> <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="inst">
        <div class="w3-container w3-sand w3-padding">
            <b>Instrumento:</b> <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="duracao">
        <div class="w3-container w3-sand w3-padding">
            <b>Duração:</b> <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    
</xsl:stylesheet>