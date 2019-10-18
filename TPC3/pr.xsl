<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
            <html>
                <head>
                    <title><xsl:value-of select="//keyname"/></title>
                    <meta charset="UTF-8"/>
                    <style>
                        body{
                            background-color:#e6ffff;
                        }
                        div{
                            border-top: solid black;
                            margin : 10px;
                        }
                        table {
                            border-collapse: collapse;
                        }
                        
                        table, th, td {
                            border: 1px solid black;
                        }
                        th,td{
                            padding: 5px;
                        }
                    </style>
                </head>
            </html>
            <body>
                 <xsl:apply-templates/>
            </body>
    </xsl:template>
    
    <xsl:template match="meta">
        <div>
            <h1><xsl:value-of select="keyname"/></h1>
            <h2><xsl:value-of select="title"/></h2>
            <h3>Início:<xsl:value-of select="bdate"/> Fim:<xsl:value-of select="edate"/></h3>
            <table>
                <tr>
                    <th>Nome do Supervisor:</th><td><xsl:value-of select="supervisor/name"/></td>
                </tr>
                <tr>
                    <th>Email:</th><td><xsl:value-of select="supervisor/email"/></td>
                </tr>
                <tr>
                <th>Homepage:</th><td><a href="{supervisor/homepage}"><xsl:value-of select="supervisor/homepage"/> </a></td>
                </tr>
            </table>
        </div>
    </xsl:template>
    
    <xsl:template match="workteam">
        <div>
            <h2>Workteam:</h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="abstract">
        <div>
            <h2>Abstract:</h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <div>
            <h2>Deliverables:</h2>
            <ul>
                <xsl:apply-templates/>
            </ul>
        </div>
    </xsl:template>
    
    <xsl:template match="member">
        <div>
            <p><b>Identificação:</b><xsl:value-of select="identifier"/></p>
            <p><b>Nome:</b><xsl:value-of select="name"/></p>
            <p><b>Email:</b><xsl:value-of select="email"/></p>
            <img src="{photo/@path}" width="10%"/>
        </div>
    </xsl:template>
    
    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="b">
        <b>
            <xsl:apply-templates/>
        </b>
    </xsl:template>
    
    <xsl:template match="i">
        <i>
            <xsl:apply-templates/>
        </i>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li><a href="{@path}"><xsl:value-of select="."/></a></li>
    </xsl:template>
    
    
    
</xsl:stylesheet>