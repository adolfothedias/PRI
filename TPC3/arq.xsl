<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"/>
                    <style>
                        body {
                            background-color:#DEB887;
                        }
                    </style>
                </head>
            </html>
            <body>
                <h1>Arqueossítios do Nordeste Português</h1>
                <ol>
                    <xsl:apply-templates/>
                </ol>
            </body>
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português: Página Individual</title>
                    <meta charset="UTF-8"/>
                    <style>
                        table {
                            border-collapse: collapse;
                        }
                        
                        table, th, td {
                            border: 1px solid black;
                        }
                        address{
                            margin:10px;
                        }
                        body {
                            background-color:#DEB887;
                        }
                    </style>
                </head>
            </html>
            <body>
                <h1><xsl:value-of select="IDENTI"/></h1>
                <table>
                    <xsl:apply-templates/>
                </table>
                <address>
                    <a href="index.html#{generate-id()}">Voltar ao Índice</a>
                </address>
            </body>
        </xsl:result-document>
    </xsl:template>
    
    
    <xsl:template match="IDENTI">
        <tr>
            <th>Identificação:</th><td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="TIPO">
        <tr>
            <th>Tipo:</th><td><xsl:value-of select="@ASSUNTO"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="IMAGEM">
        <tr>
            <th>Imagem:</th><td><xsl:value-of select="@NOME"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <tr>
            <th>Descrição:</th><td><xsl:apply-templates/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="CRONO">
        <tr>
            <th>Cronologia:</th><td><xsl:apply-templates/></td>
        </tr>
    </xsl:template >
    
    <xsl:template match="LUGAR">
    <tr>
        <th>Lugar:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="FREGUE">
    <tr>
        <th>Freguesia:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="CONCEL">
    <tr>
        <th>Concelho:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template >
    
    <xsl:template match="CODADM">
    <tr>
        <th>Codadm:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template >
    
    <xsl:template match="LATITU">
    <tr>
        <th>Latitude:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template >
    
    <xsl:template match="LONGIT">
    <tr>
        <th>Longitude:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template >
    
    <xsl:template match="ALTITU">
    <tr>
        <th>Altitude:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="ACESSO">
    <tr>
        <th>Acesso:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="QUADRO">
    <tr>
        <th>Quadro:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="TRAARQ">
    <tr>
        <th>Traarq:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="DESARQ">
    <tr>
        <th>Desarq:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="INTERP">
    <tr>
        <th>Interp:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
    <tr>
        <th>Deposi:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="INTERE">
    <tr>
        <th>Intere:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
    <tr>
        <th>Bibliografia:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="AUTOR">
    <tr>
        <th>Autor:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="DATA">
    <tr>
        <th>Data:</th><td><xsl:apply-templates/></td>
    </tr>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a href="{@TERMO}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>